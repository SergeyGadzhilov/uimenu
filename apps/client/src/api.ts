import { toast } from "react-toastify";
import { DataToken, IdDataToken, IdToken, Token } from "./types";

async function request(path: string, { data, token, method = "GET" }: { data?: unknown, token?: string | null, method?: string }): Promise<unknown> {
  const url = '/api' + path;
  const headers: Record<string, string> = {
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  };

  try {
    const body = (method !== "GET" && method !== "DELETE") ? JSON.stringify(data) : null;
    const response = await fetch(url, { method, headers, body });

    if (response.ok) {
      return method === "DELETE" ? true : response.json();
    }

    if(response.status == 403){
      const json = await response.json();
      return toast.error( json.message, {type: "error"});
    }

    const json = await response.json();
    if(Array.isArray(json.message)){
      toast.error(json.message[0], {type: "error"});
      return;
    }

    throw new Error(JSON.stringify(json));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error instanceof SyntaxError) {
        toast("Server Error", { type: "error" });
        return;
    }

    // Handle all other errors
    let emsg = null;
    if(error?.messag){
      emsg = JSON.parse(error?.message)?.message;
    }
    const errorMessage = emsg || 'An unexpected error occurred.';
    toast(errorMessage, { type: "error" });
  }
}

export function fetchPlaces(token:Token) {
  return request("/places/", { token});
}

export function fetchPlace(place:IdToken) {
  return request(`/places/${place.id}`, { token:place.token });
}

export function fetchPlaceMenu(placeId:string){
  return request(`/menu/${placeId}/`,{method: "GET"});
}

export function addCategory(cat:DataToken) {
  return request(`/places/${cat.id}/categories/`, { data:cat.data, method: "POST", token: cat.token });
}

export function addMenuItem(item:DataToken) {
  return request(`/places/${item.placeId}/categories/menu-items`, {data:item.data, method: "POST" , token: item.token});
}

export function updateMenuItem(item:IdDataToken, placeId:string) {
  return request(`/places/${placeId}/categories/menu-items/${item.id}`, { data:item.data, token:item.token, method: "PATCH" });
}

export function removePlace(place:IdToken) {
  return request(`/places/${place.id}`, { token:place.token, method: "DELETE" });
}

export function removeCategory(cat:IdToken,placeId:string) {
  return request(`/places/${placeId}/categories/${cat.id}`, { token:cat.token, method: "DELETE" });
}

export function removeMenuItem(item:IdToken, placeId:string) {
  return request(`/places/${placeId}/categories/menu-items/${item.id}`, { token:item.token, method: "DELETE" });
}

export function updatePlace(place:IdDataToken) {
  return request(`/places/${place.id}`, { data:place.data, token:place.token, method: "PATCH" });
}

export function fetchOrders(place:IdToken) {
  return request(`/orders/${place.placeId}/`, { token:place.token });
}

export function completeOrder(order:IdDataToken, placeId: string) {
  return request(`/orders/${placeId}/${order.id}`, {data: order.data, token:order.token, method: "PATCH" });
}
