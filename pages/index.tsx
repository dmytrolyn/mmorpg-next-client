import Layout from 'layouts/EntryLayout';
import Recent from 'components/Recent';
import GameCenter from 'components/GameCenter';
import { ContentWrap } from 'components/common/styled/components';

import { NewsItemSchema } from 'utils/contentTypes'

import RecentAPI from 'api/recent'
import PagesAPI from 'api/pages'

export default function Index(props: any) {
  return (
    <Layout>
      <ContentWrap>
        <Recent {...props} />
      </ContentWrap>
      <GameCenter />
    </Layout>
  )
}

export async function getStaticProps() {
    try {
        let news = await PagesAPI.getNews()
        return {
          props: {
            news
          }
        }
    } catch(err) {
        return {
          props: {},
          redirect: '/500'
        }
    }
}
