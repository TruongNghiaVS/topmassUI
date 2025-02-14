import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
// Extend dayjs with the plugin
dayjs.extend(isSameOrBefore);
import { ISalary, ISalaryBefore2014 } from "./insurance/insurance-security";

export const splitDateRangesByYear = (
  startDate: string,
  endDate: string,
  salary: number,
  status: number,
  type: number
): ISalary[] => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const ranges: ISalary[] = [];
  let currentStart = start;

  while (currentStart.isSameOrBefore(end)) {
    const nextEnd = currentStart.endOf("year").isBefore(end)
      ? currentStart.endOf("year")
      : end; // Đảm bảo không vượt quá ngày kết thúc
    ranges.push({
      start: currentStart.format("MM/YYYY"),
      end: nextEnd.format("MM/YYYY"),
      salary,
      status,
      year: currentStart.year(),
      countMonth: nextEnd.diff(currentStart, "month") + 1,
      type,
    });

    // Chuyển sang đầu năm tiếp theo
    currentStart = currentStart.add(1, "year").startOf("year");
  }

  return ranges;
};

export const getCoefficient = (year: number) => {
  let coefficient = 0;
  if (year < 1995) coefficient = 5.43;
  else {
    switch (year) {
      case 1995:
        coefficient = 4.61;
        break;
      case 1996:
        coefficient = 4.36;
        break;
      case 1997:
        coefficient = 4.22;
        break;
      case 1998:
        coefficient = 3.92;
        break;
      case 1999:
        coefficient = 3.75;
        break;
      case 2000:
        coefficient = 3.82;
        break;
      case 2001:
        coefficient = 3.83;
        break;
      case 2002:
        coefficient = 3.68;
        break;
      case 2003:
        coefficient = 3.57;
        break;
      case 2004:
        coefficient = 3.31;
        break;
      case 2005:
        coefficient = 3.06;
        break;
      case 2006:
        coefficient = 2.85;
        break;
      case 2007:
        coefficient = 2.63;
        break;
      case 2008:
        coefficient = 2.14;
        break;
      case 2009:
        coefficient = 2;
        break;
      case 2010:
        coefficient = 1.83;
        break;
      case 2011:
        coefficient = 1.54;
        break;
      case 2012:
        coefficient = 1.41;
        break;
      case 2013:
        coefficient = 1.33;
        break;
      case 2014:
        coefficient = 1.27;
        break;
      case 2015:
        coefficient = 1.27;
        break;
      case 2016:
        coefficient = 1.23;
        break;
      case 2017:
        coefficient = 1.19;
        break;
      case 2018:
        coefficient = 1.15;
        break;
      case 2019:
        coefficient = 1.12;
        break;
      case 2020:
        coefficient = 1.08;
        break;
      case 2021:
        coefficient = 1.07;
        break;
      case 2022:
        coefficient = 1.03;
        break;
      case 2023:
        coefficient = 1;
        break;
      case 2024:
        coefficient = 1;
        break;
      default:
        coefficient = 1;
        break;
    }
  }
  return coefficient;
};

export const calculateSalary = (
  salary: number,
  month: number,
  year: number
) => {
  const coefficient = getCoefficient(year);
  const count = salary * month * coefficient;
  return count;
};

export const getCountMotnh = (months: number[]) => {
  const month = months.reduce((total, num) => total + num, 0);
  const integerPart = Math.floor(month / 12);
  const remainder = month % 12;
  return {
    integerPart,
    remainder,
  };
};

function sumMonthsInYear(dateRanges: { start: string; end: string }[]): number {
  let monthSum = 0;
  dateRanges.forEach((range) => {
    const start = dayjs(range.start, "MM/YYYY");
    const end = dayjs(range.end, "MM/YYYY");
    monthSum += end.month() - start.month() + 1;
  });

  return monthSum;
}

export const getDataBefore2014 = (data: ISalary[]) => {
  const res: { count: number; items: ISalary[] } = { count: 0, items: [] };
  const resGroup = data
    .filter((item) => item.year < 2014)
    .reduce((acc, item) => {
      if (!acc[item.year]) {
        acc[item.year] = [];
      }
      acc[item.year].push(item);
      return acc;
    }, {} as Record<number, ISalary[]>);
  Object.entries(resGroup).forEach(([key, value]) => {
    const arrCheck = value.map((item) => {
      return { start: item.start, end: item.end };
    });
    const resCheck = sumMonthsInYear(arrCheck);
    if (resCheck === 12) {
      res.count += 1;
      res.items.push(...value);
    }
  });
  return res;
};

export const getTotalMonth = (data: ISalary[]) => {
  return data.reduce((total, item) => total + item.countMonth, 0);
};

export const getStringCountMonth = (months: number[]) => {
  const data = getCountMotnh(months);
  return `${data.integerPart > 0 ? `${data.integerPart} năm ` : ""}${
    data.remainder > 0 ? `${data.remainder} tháng` : ""
  }`;
};

export const calculateCountSalary = (data: ISalary[]) => {
  let sum = 0;
  data.map((item) => {
    const count = calculateSalary(item.salary || 0, item.countMonth, item.year);
    sum += count;
  });
  return sum;
};

export const avgCalculateCountSalary = (data: ISalary[]) => {
  const sum = calculateCountSalary(data);
  const month = data
    .map((item) => item.countMonth)
    .reduce((total, num) => total + num, 0);
  return month > 0 ? sum / month : 0;
};

export const calculateSumSalary = (
  salary: number = 0,
  sumIndex: number,
  countYear: number
) => {
  return salary * sumIndex * countYear;
};

export const getCountYearToTotalcalcuSalary = (data: ISalary[]) => {
  const months = data
    .map((item) => item.countMonth)
    .reduce((total, num) => total + num, 0);
  const year = months / 12;
  return Math.ceil(year * 2) / 2;
};

export const countAllTotalSalary = (
  dataBefore2014: ISalaryBefore2014,
  dataAfter2014: ISalary[],
  dataInsurance: ISalary[]
) => {
  let sum = 0;
  if (
    dataBefore2014.count > 0 ||
    (dataAfter2014.length > 0 && getTotalMonth(dataAfter2014) >= 12)
  ) {
    sum =
      calculateSumSalary(
        avgCalculateCountSalary(dataInsurance),
        1.5,
        dataBefore2014.count
      ) +
      calculateSumSalary(
        avgCalculateCountSalary(dataInsurance),
        2,
        getCountYearToTotalcalcuSalary(dataAfter2014)
      );
  } else if (dataAfter2014.length > 0 && getTotalMonth(dataAfter2014) < 12) {
    sum = 0.22 * calculateCountSalary(dataInsurance);
  }
  return sum;
};

export const getMonthsInsuranceSupport = (data: ISalary[]) => {
  const data2018 = data.filter(
    (item) => item.year >= 2018 && item.year <= 2021
  );
  const data2022 = data.filter((item) => item.year >= 2022);

  const poorHouseholds2018 = data2018
    .filter((item) => item.type === 1)
    .reduce((total, item) => total + item.countMonth, 0);
  const households2018 = data2018
    .filter((item) => item.type === 2)
    .reduce((total, item) => total + item.countMonth, 0);
  const other2018 = data2018
    .filter((item) => item.type === 0)
    .reduce((total, item) => total + item.countMonth, 0);

  const poorHouseholds2022 = data2022
    .filter((item) => item.type === 1)
    .reduce((total, item) => total + item.countMonth, 0);
  const households2022 = data2022
    .filter((item) => item.type === 2)
    .reduce((total, item) => total + item.countMonth, 0);
  const other2022 = data2022
    .filter((item) => item.type === 0)
    .reduce((total, item) => total + item.countMonth, 0);

  return {
    data2018: {
      poorHouseholds2018,
      households2018,
      other2018,
    },
    data2022: {
      poorHouseholds2022,
      households2022,
      other2022,
    },
  };
};

interface IInsurance2018 {
  poorHouseholds2018: number;
  households2018: number;
  other2018: number;
}

export const calculateInsuranceHoldHouse = (
  poorHouseholds: number,
  households: number,
  other: number,
  salary: number
) => {
  let sum = 0;
  if (poorHouseholds > 0) {
    sum += 0.22 * 0.3 * salary * poorHouseholds;
  }
  if (households > 0) {
    sum += 0.22 * 0.25 * salary * households;
  }
  if (other > 0) {
    sum += 0.22 * 0.1 * salary * other;
  }
  return sum;
};
