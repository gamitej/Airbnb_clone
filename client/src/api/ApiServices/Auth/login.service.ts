import config from "@/api/Config/config";
import http from "@/api/Config/httpService";
import { handleError } from "@/api/Error/error";

const endpoint = config.baseUrl;

export async function LoginApi(req: any) {
  try {
    const { data } = await http.post(`${endpoint}/login`, req);
    return data;
  } catch (error) {
    return handleError({});
  }
}

export async function SignUpApi(req: any) {
  try {
    const { data } = await http.post(`${endpoint}/signup`, req);
    return data;
  } catch (error) {
    return handleError({});
  }
}
