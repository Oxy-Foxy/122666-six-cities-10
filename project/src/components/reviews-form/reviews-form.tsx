import { ChangeEvent, FormEvent, useState } from 'react';
import { MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { submitReviewAction } from '../../store/api-actions';
import { getReviewSubmitStatus } from '../../store/data-process/selectors';

type ReviewsFormProps = {
  id: number
}

type RatingInputProps = {
  title: string,
  value: string,
  checked: boolean,
  disabled: boolean,
  fieldChangeHandle: (target:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )=>void
}

const FORM_DATA_DEFAULT = {
  rating: null,
  review: '',
};

const radioInputs = [
  {
    title:'perfect',
    value:'5'
  },
  {
    title:'good',
    value:'4'
  },
  {
    title:'not bad',
    value:'3'
  },
  {
    title:'badly',
    value:'2'
  },
  {
    title:'terribly',
    value:'1'
  },
];

function RatingInput({title, value, checked, disabled, fieldChangeHandle}: RatingInputProps):JSX.Element {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={checked} disabled={disabled} onChange={fieldChangeHandle} />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function ReviewsForm({id}:ReviewsFormProps):JSX.Element {
  const reviewsPendingStatus = useAppSelector(getReviewSubmitStatus);
  const [formData, setFormData] = useState(FORM_DATA_DEFAULT);
  const fieldChangeHandle = ({target}:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = target;
    setFormData({...formData, [name]:value});
  };

  const isFormAbleToSubmit = formData.rating && formData.review.length >= MIN_REVIEW_LENGTH && formData.review.length < MAX_REVIEW_LENGTH;

  const dispatch = useAppDispatch();
  const onSubmit = async () => {
    const data = await dispatch(submitReviewAction({rating: formData.rating, comment: formData.review, id: Number(id)}));
    if(!(data.type.includes('rejected'))){
      setFormData({...formData, ...FORM_DATA_DEFAULT});
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(id && isFormAbleToSubmit) {
      onSubmit();
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {radioInputs.map((item) => <RatingInput key={`${item.title}-${item.value}`} title={item.title} value={item.value} checked = {formData.rating === item.value} disabled={reviewsPendingStatus} fieldChangeHandle={fieldChangeHandle}/>)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={formData.review} placeholder="Tell how was your stay, what you like and what can be improved" disabled={reviewsPendingStatus} onChange={fieldChangeHandle}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={reviewsPendingStatus || !isFormAbleToSubmit}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
