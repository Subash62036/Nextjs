import React, { useEffect, useState } from 'react';

import { Typography, Card, LoadingIndicator } from 'components';

import {
  useDashboardQuery,
} from 'hooks';

export const DashboardMain = ():JSX.Element => {
  const { data } = useDashboardQuery();
  const dashboardResponse = data && data.data;

  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (data) {
      setIsFetched(true);
    }
  }, [data]);

  return (
    <section className="m-6">
      <Typography className="block mt-5" variant="h1">
        Welcome Admin,
      </Typography>
      {
        !isFetched
          ? <LoadingIndicator className="h-20 w-20 text-center" />
          : (
            <Card className="bg-white py-8 px-4 shadow sm:rounded-lg divide-y mt-4">
              <Typography className="m-2" variant="h3">
                Overview
              </Typography>

              <div className="grid grid-cols-4 gap-4 p-4 mt-10">
                <Card className="bg-white border-2 border-grey-200 space-y-8 rounded-lg">
                  <Typography className="text-grey-400 " variant="h5">
                    Total number of Customers
                  </Typography>

                  <Typography className="text-black text-5xl text-bold text-center hover:text-primary-500 -my-20" variant="h1">
                    {dashboardResponse && dashboardResponse.totalNumbersOfCustomer}
                  </Typography>
                </Card>

                <Card className="bg-white border-2 border-grey-200 space-y-8 rounded-lg">
                  <Typography className="text-grey-400 " variant="h5">
                    Total number of Captains
                  </Typography>

                  <Typography className="text-black text-5xl text-bold text-center hover:text-primary-500 -my-20" variant="h1">
                    {dashboardResponse && dashboardResponse.totalNumbersOfCaptain}
                  </Typography>
                </Card>

                <Card className="bg-white border-2 border-grey-200 space-y-8 rounded-lg">
                  <Typography className="text-grey-400 " variant="h5">
                    Pending Captain approval
                  </Typography>

                  <Typography className="text-black text-5xl text-bold text-center hover:text-primary-500 -my-20" variant="h1">
                    {dashboardResponse && dashboardResponse.pendingCaptainApproval}
                  </Typography>
                </Card>

                <Card className="bg-white border-2 border-grey-200 space-y-8 rounded-lg">
                  <Typography className="text-grey-400" variant="h5">
                    Total number of rides taken
                  </Typography>

                  <Typography className="text-black text-5xl text-bold text-center hover:text-primary-500 -my-20" variant="h1">
                    {dashboardResponse && dashboardResponse.totalNumbersOfRide}
                  </Typography>
                </Card>
              </div>

            </Card>
          )
}

    </section>
  );
};
