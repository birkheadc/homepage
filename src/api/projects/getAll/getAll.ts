import { Project } from "../../../types/project/project";
import { Result, ResultMessage } from "../../../types/result/result";
import utils from "../../../utils";

export default async function getAll(): Promise<Result<Project[]>> {
  // TODO: Get this from environment or something
  const url = 'https://c0n1qyz1fg.execute-api.ap-southeast-2.amazonaws.com/prod/projects';
  
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