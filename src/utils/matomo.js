import { useQuery } from 'react-query'
import axios from 'axios'

const getIdSites = (sites) =>
  sites.map((site) => site.node.frontmatter.matomo).join()

const addTotalNumbers = (data) => ({
  ...data,
  total: Object.keys(data).reduce((acc, key) => acc + data[key], 0),
})

const addTotalLines = (data) => {
  let tempTotal = {}
  for (let key in data) {
    for (let line of data[key]) {
      if (!tempTotal[line.label]) {
        tempTotal[line.label] = line.nb_visits
      } else {
        tempTotal[line.label] += line.nb_visits
      }
    }
  }
  let tempTotalArray = Object.keys(tempTotal).map((key) => ({
    label: key,
    nb_visits: tempTotal[key],
  }))
  tempTotalArray.sort((a, b) => (a.nb_visits > b.nb_visits ? -1 : 1))
  return { ...data, total: tempTotalArray }
}

export const useChart = ({ sites, chartPeriod, chartDate }) =>
  useQuery(
    ['chart', chartPeriod, chartDate],
    () =>
      axios
        .get(
          `https://stats.data.gouv.fr/?module=API&date=last${chartDate}&period=${chartPeriod}&format=json&idSite=${getIdSites(
            sites
          )}&method=VisitsSummary.getVisits`
        )
        .then((res) => res.data)
        .then((data) => {
          let total = {}
          for (let key in data) {
            for (let date in data[key]) {
              if (!total[date]) {
                total[date] = data[key][date]
              } else {
                total[date] += data[key][date]
              }
            }
          }
          return { ...data, total }
        }),
    {
      keepPreviousData: true,
    }
  )
export const useChartAgribalyse = () =>
  useQuery(
    ['chartAgribalyse'],
    () =>
      axios
        .get(
          `https://stats.data.gouv.fr/?module=API&date=last24&period=week&format=json&idSite=144&method=VisitsSummary.getVisits`
        )
        .then((res) => res.data),
    {
      keepPreviousData: true,
    }
  )
export const useApiMit = () =>
  useQuery(
    ['apiMIT'],
    () =>
      axios
        .get(
          `https://stats.data.gouv.fr/?module=API&method=Actions.getPageUrls&idSite=155&date=last13&period=week&format=JSON&segment=pageUrl%3D@https%25253A%25252F%25252Fapi.monimpacttransport.fr`
        )
        .then((res) => res.data),
    {
      keepPreviousData: true,
    }
  )
export const useApiMitTotal = () =>
  useQuery(
    'apiMITAllTime',
    () =>
      axios
        .get(
          `https://stats.data.gouv.fr/?module=API&method=Actions.getPageUrls&idSite=155&date=last6000&period=range&format=JSON&segment=pageUrl%3D@https%25253A%25252F%25252Fapi.monimpacttransport.fr`
        )
        .then((res) => res.data.reduce((acc, cur) => (acc += cur.nb_hits), 0)),
    {
      keepPreviousData: true,
    }
  )

export const useTotal = ({ sites }) =>
  useQuery('total', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last30&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=VisitsSummary.getVisits`
      )
      .then((res) => res.data)
      .then((data) => addTotalNumbers(data))
  )

export const useDatagirAverageDailyVisits = () =>
  useQuery('datagirAverageVisits', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last30&period=range&format=json&idSite=128&method=VisitsSummary.getVisits`
      )
      .then((res) => res.data)
      .then((data) => data.value / 30)
  )

export const useWebsites = ({ sites }) =>
  useQuery('websites', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last30&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=Referrers.getWebsites&filter_limit=1000`
      )
      .then((res) => res.data)
      .then((data) => addTotalLines(data))
  )
export const useOldWebsites = ({ sites }) =>
  useQuery('oldwebsites', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=lastYear,lastMonth&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=Referrers.getWebsites&filter_limit=1000`
      )
      .then((res) => res.data)
      .then((data) => addTotalLines(data))
  )
export const useSocials = ({ sites }) =>
  useQuery('socials', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last30&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=Referrers.getSocials`
      )
      .then((res) => res.data)
      .then((data) => addTotalLines(data))
  )

export const useKeywords = ({ sites }) =>
  useQuery('keywords', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last30&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=Referrers.getKeywords`
      )
      .then((res) => res.data)
      .then((data) => addTotalLines(data))
  )

export const usePeriod = ({ sites }) =>
  useQuery('period', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last30&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=VisitsSummary.getVisits`
      )
      .then((res) => res.data)
      .then((data) => addTotalNumbers(data))
  )
export const useReference = ({ sites }) =>
  useQuery('reference', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last60&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=VisitsSummary.getVisits`
      )
      .then((res) => res.data)
      .then((data) => addTotalNumbers(data))
  )
export const usePages = ({ sites }) =>
  useQuery('pages', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last30&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=Actions.getEntryPageUrls&filter_limit=1000`
      )
      .then((res) => res.data)
      .then((data) => addTotalLines(data))
  )
export const useAllTime = ({ sites }) =>
  useQuery('allTime', () =>
    axios
      .get(
        `https://stats.data.gouv.fr/?module=API&date=last6000&period=range&format=json&idSite=${getIdSites(
          sites
        )}&method=VisitsSummary.getVisits`
      )
      .then((res) => res.data)
      .then((data) => {
        for (let key in data) {
          const base = sites.find(
            (site) => site.node.frontmatter.matomo === Number(key)
          )?.node.frontmatter.visitors
          data[key] += base
        }
        return data
      })
      .then((data) => addTotalNumbers(data))
  )
