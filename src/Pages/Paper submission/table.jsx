import React from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../Static/css/table_paper_sub.css'

export default function TablePaperSubmission() {
    return (
        <div className="page-sub-table">
            <Container fluid>
                <table className='Table-1'>
                    <thead>
                        <tr>
                            <th style={{ borderRight: '1px solid #dddddd' }}></th>
                            <th colSpan={3} style={{ borderBottom: '1px solid #dddddd', borderRight: '1px solid #dddddd' }}>
                                INDIA (INR)
                            </th>
                            <th colSpan={3} style={{ borderBottom: '1px solid #dddddd', borderRight: '1px solid #dddddd' }}>
                                LOW INCOME COUNTRY (USD)
                            </th>
                            <th colSpan={3} style={{ borderBottom: '1px solid #dddddd' }}>
                                HIGH INCOME COUNTRY (USD)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ borderBottom: '1px solid #dddddd' }}></td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Early Bird</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Regular</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>On-spot</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Early Bird</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Regular</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>On-spot</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Early Bird</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Regular</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>On-spot</td>

                        </tr>

                        <tr>
                            <td> Academicians</td>
                            <td>
                                <div className="td-container">
                                    <h5>6000</h5>
                                </div>
                            </td>
                            <td><div className="td-container">
                                <h5>7000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>8500</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>300</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>350</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>450</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>350</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>400</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>500</h5>
                            </div></td>

                        </tr>
                        <tr>
                            <td>Researcg Scholars / <br />Students</td>
                            <td><div className="td-container">
                                <h5>4000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>5000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>6000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>200</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>250</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>350</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>250</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>300</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>400</h5>
                            </div></td>

                        </tr>
                        <tr>
                            <td>Industrial <br />Delegates</td>
                            <td><div className="td-container">
                                <h5>10000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>12000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>15000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>350</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>400</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>500</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>450</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>500</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>600</h5>
                            </div></td>

                        </tr>
                        <tr>
                            <td>Accompanying <br />Delegates</td>
                            <td><div className="td-container">
                                <h5>2000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>2000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>2000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>125</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>125</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>125</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>150</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>150</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>150</h5>
                            </div></td>

                        </tr>
                    </tbody>
                </table>
            </Container>

            {/* India */}
            <Container fluid>
                <table className='Table-1-mobile'>
                    <thead>
                        <tr>
                            <th style={{ borderRight: '1px solid #dddddd' }}></th>
                            <th colSpan={3} style={{ borderBottom: '1px solid #dddddd' }}>
                                INDIA (INR)
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ borderBottom: '1px solid #dddddd' }}></td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Early Bird</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Regular</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>On-spot</td>

                        </tr>

                        <tr>
                            <td> Academicians</td>
                            <td>
                                <div className="td-container">
                                    <h5>6000</h5>
                                </div>
                            </td>
                            <td><div className="td-container">
                                <h5>7000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>8500</h5>
                            </div></td>


                        </tr>
                        <tr>
                            <td>Researcg Scholars / <br />Students</td>
                            <td><div className="td-container">
                                <h5>4000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>5000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>6000</h5>
                            </div></td>


                        </tr>
                        <tr>
                            <td>Industrial <br />Delegates</td>
                            <td><div className="td-container">
                                <h5>10000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>12000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>15000</h5>
                            </div></td>

                        </tr>
                        <tr>
                            <td>Accompanying <br />Delegates</td>
                            <td><div className="td-container">
                                <h5>2000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>2000</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>2000</h5>
                            </div></td>

                        </tr>
                    </tbody>
                </table>
            </Container>

            {/* Low Income Country */}
            <Container fluid>
                <table className='Table-1-mobile'>
                    <thead>
                        <tr>
                            <th style={{ borderRight: '1px solid #dddddd' }}></th>
                            <th colSpan={3} style={{ borderBottom: '1px solid #dddddd' }}>
                                LOW INCOME COUNTRY (USD)
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ borderBottom: '1px solid #dddddd' }}></td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Early Bird</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Regular</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>On-spot</td>

                        </tr>

                        <tr>
                            <td> Academicians</td>
                            <td>
                                <div className="td-container">
                                    <h5>300</h5>
                                </div>
                            </td>
                            <td><div className="td-container">
                                <h5>350</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>450</h5>
                            </div></td>


                        </tr>
                        <tr>
                            <td>Researcg Scholars / <br />Students</td>
                            <td><div className="td-container">
                                <h5>200</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>250</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>350</h5>
                            </div></td>


                        </tr>
                        <tr>
                            <td>Industrial <br />Delegates</td>
                            <td><div className="td-container">
                                <h5>350</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>400</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>500</h5>
                            </div></td>

                        </tr>
                        <tr>
                            <td>Accompanying <br />Delegates</td>
                            <td><div className="td-container">
                                <h5>125</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>125</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>125</h5>
                            </div></td>

                        </tr>
                    </tbody>
                </table>
            </Container>


            {/* High Income Country */}
            <Container fluid>
                <table className='Table-1-mobile'>
                    <thead>
                        <tr>
                            <th style={{ borderRight: '1px solid #dddddd' }}></th>
                            <th colSpan={3} style={{ borderBottom: '1px solid #dddddd' }}>
                                HIGH INCOME COUNTRY (USD)
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ borderBottom: '1px solid #dddddd' }}></td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Early Bird</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>Regular</td>
                            <td style={{ borderBottom: '1px solid #dddddd' }}>On-spot</td>

                        </tr>

                        <tr>
                            <td> Academicians</td>
                            <td>
                                <div className="td-container">
                                    <h5>350</h5>
                                </div>
                            </td>
                            <td><div className="td-container">
                                <h5>400</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>500</h5>
                            </div></td>


                        </tr>
                        <tr>
                            <td>Researcg Scholars / <br />Students</td>
                            <td><div className="td-container">
                                <h5>250</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>300</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>400</h5>
                            </div></td>


                        </tr>
                        <tr>
                            <td>Industrial <br />Delegates</td>
                            <td><div className="td-container">
                                <h5>450</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>500</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>600</h5>
                            </div></td>

                        </tr>
                        <tr>
                            <td>Accompanying <br />Delegates</td>
                            <td><div className="td-container">
                                <h5>150</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>150</h5>
                            </div></td>
                            <td><div className="td-container">
                                <h5>150</h5>
                            </div></td>

                        </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    )
}
