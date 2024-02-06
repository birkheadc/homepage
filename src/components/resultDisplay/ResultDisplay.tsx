import * as React from 'react';
import { Result, ResultError } from '@/types/result/result';


interface IResultDisplayProps {
  result: Result | undefined,
  displayErrors?: boolean
}

/**
*
* @returns {JSX.Element | null}
*/
export default function ResultDisplay(props: IResultDisplayProps): JSX.Element | null {
  if (props.result == null) return null;
  if (!anythingToDisplay(props.result, props.displayErrors)) return null;
  return (
    <div className='m-auto w-fit'>
      <span className='text-xl font-bold text-center lg:text-2xl'>{props.result.message}</span>
      {props.displayErrors && <ResultDisplayErrors errors={props.result.errors} />}
    </div>
  );
}

function ResultDisplayErrors(props: { errors: ResultError[] }): JSX.Element {
  return (
    <ul>
      {props.errors.map(
        (error, index) =>
        <React.Fragment key={`result-display-error-key-${index}`}>
        { error.message && <li key={`result-display-error-${index}`}>{error.message}</li>}
        </React.Fragment>
      )}
    </ul>
  );
}

function anythingToDisplay(result: Result, displayErrors: boolean | undefined): boolean {
  if (displayErrors === true && result.errors.length > 0) return true;
  if (result.message) return true;
  return false;
}