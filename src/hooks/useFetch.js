import { useEffect, useState } from 'react';

//TODO: Este hooks permite consumir una API a través de la petición get, y devuelve los datos que se necesitan. Puede usarse con
//TODO: con cualquier petición get. Además se envían las variable "isPending" que permite contralar el estado de la petición y la
//TODO: "error" que permite captural algún error que ocurra con la petición

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async (url) => {
			try {
				let res = await fetch(url);

				if (!res.ok) {
					throw new Error({
						err: true,
						status: res.status,
						statusText: !res.statusText ? 'Ocurrió un error' : res.statusText,
					});
				}

				let data = await res.json();

				setIsPending(false);
				setData(data);
				setError({ err: false });
			} catch (err) {
				setIsPending(true);
				setError(err);
			}
		};
		getData(url);
	}, [url]);

	return { data, isPending, error };
};
