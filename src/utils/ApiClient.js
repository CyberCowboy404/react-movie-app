import { API_URL } from "../config/env";

class ApiClient {
  baseUrl = API_URL;

  headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer Wookie2021"
  };

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "GET",
      headers: this.headers
    });

    return response.json();
  }

  async post(path, payload) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(payload)
    });

    return response.json();
  }
}

export const apiClient = new ApiClient();
