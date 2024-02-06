'use client';

import ResultDisplay from '@/components/resultDisplay/ResultDisplay';
import Spinner from '@/components/spinner/Spinner';
import { Comment } from '@/types/comment/comment';
import { Result } from '@/types/result/result';
import * as React from 'react';

interface ContactFormProps {

}

export default function ContactForm(props: ContactFormProps): JSX.Element {

  const [ isWorking, setWorking ] = React.useState<boolean>(false);
  const [ recentResult, setRecentResult ] = React.useState<Result | undefined>();
  const [ comment, setComment ] = React.useState<Comment>({
    name: '',
    site: 'birkheadc.me',
    body: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setComment(c => {
      const newComment = {...c};
      newComment[name] = value;
      return newComment;
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setWorking(true);
    console.log({comment});
  }

  return (
    <form className='relative w-full' onSubmit={handleSubmit}>
      { isWorking && <div className='absolute w-full h-full'>
        <Spinner />
      </div>}
      <ResultDisplay result={recentResult} />
      <div className={`${isWorking ? 'pointer-events-none opacity-25' : ' pointer-events-auto opacity-100'} flex flex-col gap-4 w-full`}>
        <div className='relative w-full text-xl border-2 border-primary-1 lg:text-2xl focus-within:border-primary-0 focus-within:text-primary-0'>
          <label className='absolute px-2 -top-4 left-2 bg-primary-3 focus' htmlFor='name'>name</label>
          <input className='w-full h-full p-2 py-3 outline-none bg-primary-3' disabled={isWorking} id='name' name='name' type='text' value={comment.name} onChange={handleChange} />
        </div>
        <div className='relative w-full text-xl border-2 border-primary-1 lg:text-2xl focus-within:border-primary-0 focus-within:text-primary-0'>
          <label className='absolute px-2 -top-4 left-2 bg-primary-3' htmlFor='body'>comment</label>
          <textarea className='w-full h-full p-2 py-3 outline-none bg-primary-3' disabled={isWorking} name='body' id='body' rows={4} value={comment.body} onChange={handleChange}></textarea>
        </div>
        <button className='p-1 px-3 m-auto text-2xl border-2 bg-primary-1 text-primary-3 w-fit lg:text-3xl hover:bg-primary-2 focus:bg-primary-2 hover:text-primary-0 focus:text-primary-0 border-primary-0' disabled={isWorking} type='submit'>submit</button>
      </div>
    </form>
  );
}