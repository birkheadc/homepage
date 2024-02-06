import { Result, ResultMessage } from "@/types/result/result";
import { Comment } from "@/types/comment/comment";

export default async function postComment(commentsServerUrl: string, comment: Comment): Promise<Result> {
  const url = commentsServerUrl;

  const controller = new AbortController();
  const timeout = setTimeout(() => {controller.abort()}, 8000);
  try {
    const response = await fetch(url, {
      method: 'POST',
      signal: controller.signal,
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) return Result.Fail().WithMessage(ResultMessage.CONNECTION_REFUSED);
    return Result.Succeed().WithMessage(ResultMessage.POST_COMMENT_SUCCESS);
  } catch {
    return Result.Fail().WithMessage(ResultMessage.CONNECTION_FAILED)
  } finally {
    clearTimeout(timeout);
  }
}