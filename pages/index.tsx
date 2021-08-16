import Layout from 'layouts/EntryLayout';
import Recent from 'components/Recent';
import GameCenter from 'components/GameCenter';
import { ContentWrap } from 'components/common/styled/components';

export default function Index() {
  return (
    <Layout>
      <ContentWrap>
        <Recent />
      </ContentWrap>
      <GameCenter />
    </Layout>
  )
}
