import axios from 'axios';

export default {
  search: (searchTerm, startDate, endDate) => {
    axios.get(`/api/search/${searchTerm}/${startDate}/${endDate}`)
      .then((response)=>{
        console.log(response);
      })
  }
}
