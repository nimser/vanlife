export async function getHostVans() {
  const endpoint = `/host/vans`;
  const res = await fetch(import.meta.env.VITE_API_URL + endpoint, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch vans");
  }
  const data = await res.json();
  return data;
}

export async function getVans(id) {
  const endpoint = id ? `/vans/${id}` : "/vans";
  const res = await fetch(import.meta.env.VITE_API_URL + endpoint, {
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch vans");
  }
  const data = await res.json();
  return data;
}

export async function login(formData) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
    method: "post",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
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
