import React from 'react'

const DeliveryTaskTable = () => {
    return (
        <div>
            <div class="card-body pa-0">
                <div class="table-wrap">
                    <div class="table-responsive">
                        <table class="table table-sm table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Company</th>
                                    <th>Update</th>
                                    <th>Budget</th>
                                    <th>Tasks</th>
                                    <th class="w-20">Status</th>
                                    <th>Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Branding</td>
                                    <td>Pineapple Inc</td>
                                    <td>13 Nov 2018</td>
                                    <td><span class="badge badge-soft-success">Completed</span></td>
                                    <td><span class="d-flex align-items-center"><i style={{fontSize:'25px'}}
                                        class="glyph-icon iconsminds-arrow-circle font-25 mr-10 text-light-40"></i><span>0</span></span>
                                    </td>
                                    <td>
                                        <div class="progress-wrap lb-side-left mnw-125p">
                                            <div class="progress-lb-wrap">
                                                <label class="progress-label mnw-25p">95%</label>
                                                <div class="progress progress-bar-xs">
                                                    <div class="progress-bar bg-success w-95" role="progressbar"
                                                        aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>10 Nov 2018</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryTaskTable
