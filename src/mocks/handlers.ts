import { rest } from "msw";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const handlers = [
  // Auth handlers
  rest.post(`${baseUrl}/auth/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        user: {
          _id: "1",
          name: "Test User",
          email: "test@example.com",
          role: ["user"],
        },
        token: "test-token",
      })
    );
  }),

  // Products handlers
  rest.get(`${baseUrl}/products`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
      })
    );
  }),

  // Profile handlers
  rest.get(`${baseUrl}/profile`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: "1",
        name: "Test User",
        email: "test@example.com",
        role: ["user"],
      })
    );
  }),
];
