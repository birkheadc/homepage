import { Project } from "../../../types/project/project";
import { Result, ResultMessage } from "../../../types/result/result";
import utils from "../../../utils";

export default async function getAll(): Promise<Result<Project[]>> {
  const url = process.env.NEXT_PUBLIC_PROJECTS_URL;
  if (url == null) return Result.Fail().WithMessage(ResultMessage.URL_NOT_DEFINED);

  await new Promise<void>((res, rej) => {
    setTimeout(() => {
      res();
    }, 4000)
  } )
  
  const { signal, timeout } = utils.api.generateAbortSignal();

  try {
    const response = await fetch(url, {
      method: 'GET',
      signal: signal
    });
  
    if (!response.ok) {
      return Result.Fail().WithMessage(ResultMessage.CONNECTION_REFUSED);
    }
  
    const data = await response.json();
    const projects = Project.from().json(data);
  
    return Result.Succeed().WithBody(projects).WithMessage(ResultMessage.FETCH_PROJECTS_SUCCESS);
  } catch {
    return Result.Fail().WithMessage(ResultMessage.CONNECTION_FAILED);
  } finally {
    clearTimeout(timeout);
  }
}