import React from 'react'

const ytStatus = {
    width: '8px',
    height: '8px',
    borderRadius: '8px',
    display: 'inline-block',
    marginRight: '5px'

}
const LendingCommitmentTable = () => {
    const randomnumbergenerator = (from, to) => {
        return Math.floor(Math.random() * (to - from)) + 1;
    };
    const tableData = [
        {
            kpiGroup: 'Parent  Group Name',
            groupData: [
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },

                {
                    status: 'ytDefault',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pavp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    bgroup: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
            ]
        },
        {
            kpiGroup: 'Parent  Group Name',
            groupData: [
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },

                {
                    status: 'ytDefault',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pavp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    bgroup: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
            ]
        },
        {
            kpiGroup: 'Parent  Group Name',
            groupData: [
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },

                {
                    status: 'ytDefault',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pavp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    bgroup: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
            ]
        },
        {
            kpiGroup: 'Parent  Group Name',
            groupData: [
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },

                {
                    status: 'ytDefault',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pavp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    bgroup: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
            ]
        },
        {
            kpiGroup: 'Parent  Group Name',
            groupData: [
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },

                {
                    status: 'ytDefault',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytSuccess',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytDanger',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
                {
                    status: 'ytWarning',
                    groupName: 'ADB Sovereign in Q1 BRAG',
                    ahvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    ecvp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pevp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pivp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    pavp: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    },
                    bgroup: {
                        ytd: randomnumbergenerator(1, 500),
                        actual: randomnumbergenerator(1, 1000),
                        targets: randomnumbergenerator(1, 1000)
                    }
                },
            ]
        },
    ]

    return (
        <div>
            <div class="">
                <div class="table-wrap">
                    <div class="table-responsive">
                        <table class="table table-bordered table-sm table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>Indicator</th>
                                    <th className="text-center"></th>
                                    <th style={{ backgroundColor: '#F7F7F7' }} className="text-center" colspan="4">AHVP</th>
                                    <th className="text-center" colspan="4">ECVP</th>
                                    <th style={{ backgroundColor: '#F7F7F7' }} className="text-center" colspan="4">PEVP</th>
                                    <th className="text-center" colspan="4">PIVP</th>
                                    <th style={{ backgroundColor: '#F7F7F7' }} className="text-center" colspan="4">Bank Group</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center">Indicator</td>
                                    <td className="text-center"></td>

                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center"></td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">YTD</td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">Actual</td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">Targets</td>

                                    <td className="text-center"></td>
                                    <td className="text-center">YTD</td>
                                    <td className="text-center">Actual</td>
                                    <td className="text-center">Targets</td>

                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center"></td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">YTD</td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">Actual</td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">Targets</td>

                                    <td className="text-center"></td>
                                    <td className="text-center">YTD</td>
                                    <td className="text-center">Actual</td>
                                    <td className="text-center">Targets</td>


                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center"></td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">YTD</td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">Actual</td>
                                    <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">Targets</td>

                                </tr>
                                {
                                    tableData.map(el => {
                                        return (
                                            <>
                                                <tr >
                                                    <td colspan="22" className="text-center" style={{ fontWeight: '700', backgroundColor: '#E2E2E2' }}> {el.kpiGroup} </td>
                                                </tr>
                                                {
                                                    el.groupData.map(gdata => (
                                                        <tr>
                                                            <td className="text-center"> {gdata.groupName} </td>
                                                            <td className="text-center"> UA</td>



                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span style={ytStatus} className={gdata.status}  ></span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.ahvp.ytd} </span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.ahvp.actual} </span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.ahvp.targets} </span>
                                                            </td>


                                                            <td className="text-center">
                                                                <span style={ytStatus} className={gdata.status}  ></span>
                                                            </td>
                                                            <td className="text-center">
                                                                <span> {gdata.ecvp.ytd} </span>
                                                            </td>
                                                            <td className="text-center">
                                                                <span> {gdata.ecvp.actual} </span>
                                                            </td>
                                                            <td className="text-center">
                                                                <span> {gdata.ecvp.targets} </span>
                                                            </td>



                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span style={ytStatus} className={gdata.status}  ></span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.pevp.ytd} </span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.pevp.actual} </span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.pevp.targets} </span>
                                                            </td>



                                                            <td className="text-center">
                                                                <span style={ytStatus} className={gdata.status}  ></span>
                                                            </td>
                                                            <td className="text-center">
                                                                <span> {gdata.pivp.ytd} </span>
                                                            </td>
                                                            <td className="text-center">
                                                                <span> {gdata.pivp.actual} </span>
                                                            </td>
                                                            <td className="text-center">
                                                                <span> {gdata.pivp.targets} </span>
                                                            </td>



                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span style={ytStatus} className={gdata.status}  ></span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.pivp.ytd} </span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.pivp.actual} </span>
                                                            </td>
                                                            <td style={{ backgroundColor: '#F7F7F7' }} className="text-center">
                                                                <span> {gdata.pivp.targets} </span>
                                                            </td>

                                                        </tr>
                                                    ))
                                                }
                                            </>
                                        )
                                    })
                                }
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LendingCommitmentTable
