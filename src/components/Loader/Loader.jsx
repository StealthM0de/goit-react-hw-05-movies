import { FadeLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderWrap}>
      <FadeLoader color="#36d7b7" />
    </div>
  );
};
