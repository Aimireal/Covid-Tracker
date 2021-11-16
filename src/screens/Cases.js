import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import dayjs from 'dayjs'
import numeral from 'numeral'
import Loading from '../components/Loading'

const Cases = () => {
    const [loading, setLoading] = useState(false)
    const [dataError, setDataError] = useState(null)
    const [chartData, setChartData] = useState({})
    const [tableData, setTableData] = useState([])

    const chartOptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 10000,
                    }
                }
            ]
        }
    }

    const fetchData = async () => {
        setLoading(true)
        setDataError(null)

        try{
            let dates = []
            let cases = []

            const {
                data: { data },
                } = await axios.get(
                    `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date", "newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate"}`
                )
            
            setTableData(data.slice(0, 90))
            const latestMonth = data.slice(0, 90).reverse()

            latestMonth.forEach((day) => {
                dates.push(dayjs(day.date).format("DD/MM/YYYY"));
                cases.push(day.newCasesByPublishDate);
            })

            setChartData({
                labels: dates,
                datasets: [
                    {
                        label: 'New cases within last 24 hours',
                        data: cases,
                        backgroundColor: '#292929'
                    }
                ]
            })

            setLoading = false
        } catch (error) {
            setLoading(false)
            console.error(error)
            setDataError('Error: Fetching cases data failed')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div
        className='px-2 sm:px-10 text-center md:text-left mx-auto'
        style={{ maxWidth: "1000px" }}
        >
        {/* NAV BUTTONS */}
        <div className='flex  justify-between mt-3'>
            <Link
            to={"/"}
            className=' bg-lavender1 hover:bg-gray-400 ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded'
            >
            <i class='fas fa-arrow-alt-circle-left'></i> Dashboard
            </Link>
            <Link
            to={"/uk/deaths"}
            className='  bg-goldenrod hover:bg-goldenrodHover ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded'
            >
            UK Deaths <i class='fas fa-arrow-alt-circle-right'></i>
            </Link>
        </div>

        {/* PAGE HEADER */}
        <h1 className='pt-5 mb-5 text-xl sm:text-2xl'>
            {`UK cases (past 90 days)`}{" "}
        </h1>

        {/* CONTENT */}
        {loading ? (
            <Loading type='case' />
        ) : dataError ? (
            <p className='text-md font-light italic'>{dataError}</p>
        ) : (
            <div>
            <div className='chart'>
                <Bar data={chartData} options={chartOptions}></Bar>
            </div>

            <p className='bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5'>
                Number of people with at least one positive COVID-19 test result
                (either lab-reported or lateral flow device), by specimen date.
                Individuals tested positive more than once are only counted once, on
                the date of their first positive test.
            </p>

            <div id='table-wrapper' className='my-5'>
                <table class='table-fixed rounded w-full shadow-sm text-center md:text-left '>
                <thead>
                    <tr>
                    <th className='bg-charcoal rounded-tl text-gray-50  px-8 py-3 w-1/2'>
                        Date
                    </th>
                    <th className='bg-charcoal rounded-tr text-gray-50  px-8 py-3 w-1/2'>
                        Cases
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((day) => (
                    <tr className='even:bg-lavender1 odd:bg-lavender2 border-b border-lavender2'>
                        <td className=' px-8 py-2'>
                        {dayjs(day.date).format("DD/MM/YYYY")}
                        </td>
                        <td className=' px-8 py-2'>
                        {numeral(day.newCasesByPublishDate).format("0,0")}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        )}
        </div>
    )
}

export default Cases