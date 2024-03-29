import { Result, ResultMessage } from "@/types/result/result";
import { Comment } from "@/types/comment/comment";

export default async function postComment(comment: Comment): Promise<Result> {
  const url = process.env.NEXT_PUBLIC_COMMENTS_URL;
  if (url == null) return Result.Fail().WithMessage(ResultMessage.URL_NOT_DEFINED);

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