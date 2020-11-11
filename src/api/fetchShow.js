import axios from 'axios'


    export const fetchShow = () => {
      return axios
        .get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        )
        .then(res => {
            console.log("fetchShow res: ", res)
            console.log("fetchShow res.data: ", res.data)
            return res.data
        //   setShow(res.data);
        //   setSeasons(formatSeasons(res.data._embedded.episodes));
        })
        .catch(error => {
            console.log("Error: ", error)
            return error
        })
    };