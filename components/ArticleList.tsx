import React, {
  useState,
} from 'react';
import LoadMoreButton from './LoadMoreButton';

const LIMIT = 10;

export default function ArticleList({ articles }: any) {
  const [page, setPage] = useState(1);
  return (
    <div className="w-full px-8 border divide-y divide-slate-500 rounded-xl border-slate-500 bg-slate-200 dark:bg-slate-800">
      {
        articles.map(({ title, link, published }: any, i: number) => {
          const [year, month, day] = (new Date(published)).toLocaleDateString().split('/');
          return (
            <div key={title} className={i < LIMIT * page ? '' : 'hidden'}>
              <div className="px-1 py-4 text-slate-800 dark:text-slate-200">
                <span className="mr-4">
                  {`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`}
                </span>
                <a href={link} target="_blank" rel="noreferrer">
                  <span className="hover:underline hover:decoration-1 hover:underline-offset-4">
                    {title}
                  </span>
                </a>
              </div>
            </div>
          );
        })
      }
      {
        page < articles.length / LIMIT && (
          <div className="flex justify-center px-1 py-4">
            <LoadMoreButton onClick={() => setPage(page + 1)} />
          </div>
        )
      }
    </div>
  );
}
