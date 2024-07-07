export async function getHostVans(hostId, vanId) {
  const url = vanId
    ? `/hosts/${hostId}/vans/${vanId}`
    : `/hosts/${hostId}/vans`;
  const res = await fetch(import.meta.env.VITE_API_URL + url);

  if (!res.ok) {
    throw new Error("Failed to fetch vans");
  }
  const data = await res.json();
  return data;
}

export async function getVans(id) {
  const url = id ? `/vans/${id}` : "/vans";
  const res = await fetch(import.meta.env.VITE_API_URL + url);
  if (!res.ok) {
    throw new Error("Failed to fetch vans");
  }
  const data = await res.json();
  return data;
}

export async function login(formData) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  let data;
  if (res.headers.get("Content-Type").includes("application/json")) {
    data = await res.json();
  }
  if (!res.ok) {
    throw new Error(data?.message || "Unknown error while loggin in");
  }
  return data;
}
