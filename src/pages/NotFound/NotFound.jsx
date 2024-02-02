import React from 'react';
import css from './NotFound.module.css';

export default function NotFoundPage() {
  return (
    <div>
      <h1 className={css.titleNotFound}>404</h1>
      <p className={css.textNotFound}>Page not found</p>
    </div>
  );
}
