export const fetchData = async () => {
    const uri = 'https://covid19.mathdro.id/api';
    const data = await (await fetch(uri)).json();
    console.log(data.countries);
}