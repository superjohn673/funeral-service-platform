import { http, HttpResponse } from "msw";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const handlers = [
  // Auth handlers
  http.post(`${baseUrl}/auth/login`, () => {
    return HttpResponse.json({
      user: {
        _id: "1",
        name: "Test User",
        email: "test@example.com",
        role: ["user"],
      },
      token: "test-token",
    });
  }),

  // Products handlers
  http.get(`${baseUrl}/products`, () => {
    return HttpResponse.json({
      data: [
        {
          _id: "1",
          title: "Test Product",
          type: "contract",
          price: 100000,
          location: {
            city: "台北市",
            district: "信義區",
          },
          images: ["/test-image.jpg"],
        },
      ],
      total: 1,
      page: 1,
      totalPages: 1,
    });
  }),

  // Profile handlers
  http.get(`${baseUrl}/profile`, () => {
    return HttpResponse.json({
      _id: "1",
      name: "Test User",
      email: "test@example.com",
      role: ["user"],
    });
  }),
];
