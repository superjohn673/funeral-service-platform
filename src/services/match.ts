import axios from "../configs/axios";
import { Match, Message } from "../types/match";

export const matchService = {
  getMatches: async () => {
    const response = await axios.get("/matches");
    return response.data;
  },

  getMatch: async (id: string) => {
    const response = await axios.get(`/matches/${id}`);
    return response.data;
  },

  sendMessage: async (matchId: string, content: string) => {
    const response = await axios.post(`/matches/${matchId}/messages`, {
      content,
    });
    return response.data;
  },

  updateMatchStatus: async (matchId: string, status: Match["status"]) => {
    const response = await axios.patch(`/matches/${matchId}`, { status });
    return response.data;
  },
};
