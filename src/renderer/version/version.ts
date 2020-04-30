import { AppPath, nodeAxios, nodeOS } from '@/global';

export async function getDownloadUrl({tag}) {
  const resp =  await nodeAxios({url:AppPath.Version,method:"get"})
  console.log(tag)
  console.log(resp.data[tag][nodeOS.platform()])
  return resp.data[tag][nodeOS.platform()].replace
}
