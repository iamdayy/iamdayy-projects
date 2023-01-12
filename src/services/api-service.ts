import axios from "axios";
const API_URL = "https://express-rest-api.fly.dev";
class ApiService {
  skillData = [];
  RequestData = {};
  ProjectData = {};
  async fetchProjectData() {
    try {
      const data = await axios.get(API_URL + "/project");
      this.ProjectData = data;
    } catch (e) {
      return e;
    }
  }

  async fetchSkillData() {
    try {
      const data = await axios.get(API_URL + "/skill");
      this.skillData = data.data;
      console.log(data);
    } catch (e) {
      return e;
    }
  }

  async fetchRequestData() {
    try {
      const data = await axios.get(API_URL + "/request");
      this.RequestData = data.data;
    } catch (e) {
      return e;
    }
  }

  async createRequestData(payload: object) {
    try {
      const response = await axios.post(API_URL + "/request", payload);
      return response;
    } catch (e) {
      return e;
    }
  }

  async createProjectData(payload: object) {
    try {
      const response = await axios.post(API_URL + "/project", payload);
      return response;
    } catch (e) {
      return e;
    }
  }
}

export default new ApiService();
