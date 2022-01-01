import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComic, setComicByName } from '../../store/comic/action';
import { getComics, getComicByName } from '../../services/getComics';

function Comic() {
	const comics = useSelector((state) => state.comicReducer.comics);
	const dispatch = useDispatch();

	useEffect(async () => {
		const comics_fetch = await getComics();
		dispatch(setComic(comics_fetch));
	}, []);

	const getComic = async (e) => {
		const comics_fetch = await getComicByName(e.target.value);
		dispatch(setComicByName(comics_fetch));
	};

	return (
		<div className='container'>
			<div className='text-center'>
				<h1 className='display-4'>Welcome</h1>
				<div className='row'>
					<input
						onChange={getComic}
						className='form-control col-4'
						type='text'
						placeholder='Search'
					/>
				</div>
				<div className='row mt-2'>
					{Array.from(comics)
						.filter((x) => x.description !== null)
						.map((c) => (
							<div
								key={c.id}
								className='card mb-3'
								style={{ maxWidth: '540px', marginRight: '10px' }}
							>
								<div className='row g-0'>
									<div className='col-md-4'>
										<img src={c.image.super_url} className='img-fluid rounded-start' alt='...' />
									</div>
									<div className='col-md-8'>
										<div className='card-body'>
											<h5 className='card-title'>{c.name}</h5>
											<p className='card-text text-justify'>
												{c.description.replace(/<[^>]*>?/gm, '')}
											</p>
											<a href={c.site_detail_url} target='_blank' className='btn btn-primary'>
												Go to View
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default Comic;
