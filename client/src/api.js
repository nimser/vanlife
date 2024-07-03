export async function getHostVans(hostId, vanId) {
  const url = vanId
    ? `/hosts/${hostId}/vans/${vanId}`
    : `/hosts/${hostId}/vans`;
  const res = await fetch(import.meta.env.VITE_API_URL + url);

  if (!res.ok) {
    throw new Error({
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    });
  }
  const data = await res.json();
  return data;
}

export async function getVans(id) {
  const url = id ? `/vans/${id}` : "/vans";
  const res = await fetch(import.meta.env.VITE_API_URL + url);
  if (!res.ok) {
    throw new Error({
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    });
  }
  const data = await res.json();
  return data;
}
