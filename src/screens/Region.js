import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import dayjs from "dayjs";
import numeral from "numeral";
import Loading from "../components/Loading";

const Region = ({ match }) => {
    const [loading, setLoading] = useState(false);
    const [dataError, setDataError] = useState(null);
    const [caseChartData, setCaseChartData] = useState({});
    const [deathChartData, setDeathChartData] = useState({});
    const [tableData, setTableData] = useState([]);
    const [regionName, setRegionName] = useState("");

    const regionId = match.params.id;

    const caseChartOptions = {
        scales: {
        yAxes: [
            {
            ticks: {
                beginAtZero: true,
                stepSize: 1000,
            },
            },
        ],
        },
    };

    const deathChartOptions = {
        scales: {
        yAxes: [
            {
            ticks: {
                beginAtZero: true,
                stepSize: 50,
            },
            },
        ],
        },
    };

    const fetchData = async () => {
        setLoading(true);
        setDataError(null);

        try {
        let dates = [];
        let cases = [];
        let deaths = [];

        const {
            data: { data },
        } = await axios.get(
            `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=utla;areaCode=${regionId}&structure={"date":"date","newCasesByPublishDate":"newCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","region":"areaName","regionId":"areaCode"}`
        );

        if (data) {
            setRegionName(data[0].region);
            setTableData(data.slice(0, 90));
            const latestMonth = data.slice(0, 90).reverse();

            latestMonth.forEach((day) => {
            dates.push(dayjs(day.date).format("DD/MM/YYYY"));
            cases.push(day.newCasesByPublishDate);
            deaths.push(day.newDeaths28DaysByPublishDate);
            });

            setCaseChartData({
            labels: dates,
            datasets: [
                {
                label: "New cases in the last 24 hours",
                data: cases,
                backgroundColor: "#00A9C0",
                },
            ],
            });

            setDeathChartData({
            labels: dates,
            datasets: [
                {
                label: "New deaths in the last 28 days",
                data: deaths,
                backgroundColor: "#D67B49",
                },
            ],
            });

            setLoading(false);
        } else {
            setLoading(false);
            setDataError("Error: Failed to fetch regional data");
        }

        //
        } catch (error) {
        setLoading(false);
        console.error(error);
        setDataError("Error: Failed to fetch regional data");
        }
    };

    useEffect(() => {
        fetchData();
    }, );

    return (
        <div
        className='px-2 sm:px-10 text-center md:text-left mx-auto'
        style={{ maxWidth: "1000px" }}
        >
        <div className='flex  justify-between mt-3'>
            <Link
            to={"/"}
            className=' bg-lavender1 hover:bg-gray-400 ease-in-out duration-100 font-semibold text-lg px-3 py-1 rounded'
            >
            <i className='fas fa-arrow-alt-circle-left'></i> Dashboard
            </Link>
        </div>

        <h1 className='pt-5  text-xl sm:text-2xl'>
            {`Regional data (past 90 days)`}{" "}
        </h1>
        
        {loading ? (
            <Loading type='regional' />
        ) : dataError ? (
            <p className='mt-5 text-md font-light italic'>{dataError}</p>
        ) : (
            <div>
            <h1 className='pt-5 mb-5 text-xl sm:text-xl font-semibold italic'>
                {`${regionName}`}{" "}
            </h1>

            <section id='cases' className='mb-10'>
                <h2 className='text-lg underline '>Cases</h2>
                <div className='chart'>
                <Bar data={caseChartData} options={caseChartOptions}></Bar>
                </div>

                <p className='bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5'>
                Number of people with at least one positive COVID-19 test result
                (either lab-reported or lateral flow device), by specimen date.
                Individuals tested positive more than once are only counted once,
                on the date of their first positive test.
                </p>
            </section>

            <section id='deaths' className=' mb-10'>
                <h2 className='text-lg underline mt-8 '>Deaths</h2>
                <div className='chart'>
                <Bar data={deathChartData} options={deathChartOptions}></Bar>
                </div>

                <p className='bg-lavender1 rounded p-3 text-center text-sm sm:text-base mt-5'>
                Number of deaths of people who had had a positive test result for
                COVID-19 and died within 28 days of the first positive test.
                </p>
            </section>

            <section id='table'>
                <div id='table-wrapper' className='mt-10 mb-5'>
                <h2 className='text-lg underline mt-8 mb-4 '>Daily summary</h2>
                <table className='table-fixed rounded w-full shadow-sm text-center md:text-left '>
                    <thead>
                    <tr>
                        <th className='bg-charcoal rounded-tl text-gray-50  px-8 py-3 w-1/2'>
                        Date
                        </th>
                        <th className='bg-charcoal  text-gray-50  px-8 py-3 w-1/2'>
                        Cases
                        </th>
                        <th className='bg-charcoal rounded-tr text-gray-50  px-8 py-3 w-1/2'>
                        Deaths
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((day) => (
                        <tr
                        className='even:bg-lavender1 odd:bg-lavender2 border-b border-lavender2'
                        key={day.date}
                        >
                        <td className=' px-8 py-2'>
                            {dayjs(day.date).format("DD/MM/YYYY")}
                        </td>
                        <td className=' px-8 py-2'>
                            {numeral(day.newCasesByPublishDate).format("0,0")}
                        </td>
                        <td className=' px-8 py-2'>
                            {numeral(day.newDeaths28DaysByPublishDate).format(
                            "0,0"
                            )}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </section>
            </div>
        )}
        </div>
    );
};

export default Region;