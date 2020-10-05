import { useEffect, useState } from 'react';
import axios from 'axios';

interface State<T> {
  data: T | null;
  loading: boolean;
  error: any;
}

const initialState = {
  data: null,
  loading: false,
  error: null
};

const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  data: {},
};


export const useApiGet = <T>(url: string) => {
  const [state, setState] = useState<State<T>>(initialState);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      try {
        setState(prevState => ({ ...prevState, loading: true }));
        const response = await axios.get<T>(url);
        if (response.status === 200 && !signal.aborted) {
          setState(prevState => ({ ...prevState, data: response.data }));
        }
      } catch (err) {
        if (!signal.aborted) {
          setState(prevState => ({ ...prevState, error: err }));
        }
      } finally {
        if (!signal.aborted) {
          setState(prevState => ({ ...prevState, loading: false }));
        }
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return state;
}

export const useApiPost = <T>(url: string) => {
  const [state, setState] = useState<State<T>>(initialState);
  const abortController = new AbortController();
  const signal = abortController.signal;
  const postData = async (body: T, onFinally: () => void) => {
    let myData: FormData = new FormData();

    for (const property in body) {
      myData.append(property, JSON.stringify(body[property]));
    };

    try {
      setState(prevState => ({ ...prevState, loading: true }));
      const response = await axios.post(url, myData, config);
      if (response.status === 200 && !signal.aborted) {
        setState(prevState => ({ ...prevState, data: response.data }));
      }
    } catch (err) {
      if (!signal.aborted) {
        setState(prevState => ({ ...prevState, error: err }));
      }
    } finally {
      if (!signal.aborted) {
        onFinally();
        setState(prevState => ({ ...prevState, loading: false }));
      }
    }
  };

  return {
    state,
    postData
  };
}
