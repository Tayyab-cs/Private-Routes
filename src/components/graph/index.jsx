import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { LineChart } from "@saas-ui/charts";

const data = [
  {
    date: "Jan 1",
    Revenue: 1475,
  },
  {
    date: "Jan 8",
    Revenue: 1936,
  },
  {
    date: "Jan 15",
    Revenue: 1555,
  },
  {
    date: "Jan 22",
    Revenue: 1557,
  },
  {
    date: "Jan 29",
    Revenue: 1977,
  },
  {
    date: "Feb 5",
    Revenue: 2315,
  },
  {
    date: "Feb 12",
    Revenue: 1736,
  },
  {
    date: "Feb 19",
    Revenue: 1981,
  },
  {
    date: "Feb 26",
    Revenue: 2581,
  },
  {
    date: "Mar 5",
    Revenue: 2592,
  },
  {
    date: "Mar 12",
    Revenue: 2635,
  },
  {
    date: "Mar 19",
    Revenue: 2074,
  },
  {
    date: "Mar 26",
    Revenue: 2984,
  },
  {
    date: "Apr 2",
    Revenue: 2254,
  },
  {
    date: "Apr 9",
    Revenue: 3159,
  },
  {
    date: "Apr 16",
    Revenue: 2804,
  },
  {
    date: "Apr 23",
    Revenue: 2602,
  },
  {
    date: "Apr 30",
    Revenue: 2840,
  },
  {
    date: "May 7",
    Revenue: 3299,
  },
  {
    date: "May 14",
    Revenue: 3487,
  },
  {
    date: "May 21",
    Revenue: 3439,
  },
  {
    date: "May 28",
    Revenue: 3095,
  },
  {
    date: "Jun 4",
    Revenue: 3252,
  },
  {
    date: "Jun 11",
    Revenue: 4096,
  },
  {
    date: "Jun 18",
    Revenue: 4193,
  },
  {
    date: "Jun 25",
    Revenue: 4759,
  },
];

const data1 = [
  {
    date: "Jan 1",
    Sale: 1500,
  },
  {
    date: "Jan 8",
    Sale: 2000,
  },
  {
    date: "Jan 15",
    Sale: 1600,
  },
  {
    date: "Jan 22",
    Sale: 1600,
  },
  {
    date: "Jan 29",
    Sale: 2000,
  },
  {
    date: "Feb 5",
    Sale: 2300,
  },
  {
    date: "Feb 12",
    Sale: 1750,
  },
  {
    date: "Feb 19",
    Sale: 2000,
  },
  {
    date: "Feb 26",
    Sale: 2600,
  },
  {
    date: "Mar 5",
    Sale: 2600,
  },
  {
    date: "Mar 12",
    Sale: 2650,
  },
  {
    date: "Mar 19",
    Sale: 2100,
  },
  {
    date: "Mar 26",
    Sale: 3000,
  },
  {
    date: "Apr 2",
    Sale: 2300,
  },
  {
    date: "Apr 9",
    Sale: 3200,
  },
  {
    date: "Apr 16",
    Sale: 2850,
  },
  {
    date: "Apr 23",
    Sale: 2650,
  },
  {
    date: "Apr 30",
    Sale: 2850,
  },
  {
    date: "May 7",
    Sale: 3300,
  },
  {
    date: "May 14",
    Sale: 3500,
  },
  {
    date: "May 21",
    Sale: 3450,
  },
  {
    date: "May 28",
    Sale: 3100,
  },
  {
    date: "Jun 4",
    Sale: 3300,
  },
  {
    date: "Jun 11",
    Sale: 4100,
  },
  {
    date: "Jun 18",
    Sale: 4200,
  },
  {
    date: "Jun 25",
    Sale: 4800,
  },
];

const data2 = [
  {
    date: "Jan 1",
    Sale: 1500,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Jan 8",
    Sale: 2000,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Jan 15",
    Sale: 1600,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Jan 22",
    Sale: 1600,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Jan 29",
    Sale: 2000,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Feb 5",
    Sale: 2300,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Feb 12",
    Sale: 1750,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Feb 19",
    Sale: 2000,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Feb 26",
    Sale: 2600,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Mar 5",
    Sale: 2600,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Mar 12",
    Sale: 2650,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Mar 19",
    Sale: 2100,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Mar 26",
    Sale: 3000,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Apr 2",
    Sale: 2300,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Apr 9",
    Sale: 3200,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Apr 16",
    Sale: 2850,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Apr 23",
    Sale: 2650,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Apr 30",
    Sale: 2850,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "May 7",
    Sale: 3300,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "May 14",
    Sale: 3500,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "May 21",
    Sale: 3450,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "May 28",
    Sale: 3100,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Jun 4",
    Sale: 3300,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Jun 11",
    Sale: 4100,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Jun 18",
    Sale: 4200,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
  {
    date: "Jun 25",
    Sale: 4800,
    Profit: Math.floor(Math.random() * 1000),
    Lose: Math.floor(Math.random() * 500),
  },
];

const valueFormatter = (value) => {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
  }).format(value);
};

const Graph = () => {
  return (
    <Card>
      <CardHeader pb="0">
        <Heading as="h4" fontWeight="medium" size="md">
          Revenue over time
        </Heading>
      </CardHeader>
      <CardBody>
        <LineChart
          data={data2}
          categories={["Sale", "Profit", "Lose"]}
          //   valueFormatter={valueFormatter}
          yAxisWidth={80}
          height="300px"
          colors={["blue", "green", "red"]}
        />
      </CardBody>
    </Card>
  );
};

export default Graph;
