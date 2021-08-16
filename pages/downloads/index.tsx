import Downloads from 'components/Downloads';
import Drivers from 'components/Drivers';
import BasicLayout from 'layouts/BasicLayout';
import { ContentWrap, ContentTitle } from 'components/common/styled/components';
import Table, { TableSizes } from 'components/common/Table';

const downloadRequirements = [
    { " ": "Storage", Minimal: "1.5Gb", Recommended: "2Gb" },
    { " ": "Processor", Minimal: "1.8GHz", Recommended: "2.3GHz" },
    { " ": "RAM", Minimal: "1024Mb", Recommended: "2Gb" },
    { " ": "Video Card", Minimal: "256Mb", Recommended: "521Mb" },
    { " ": "Connection", Minimal: "1Mbps", Recommended: "2Mbps" },
]

const titles = [" ", "Minimal", "Recommended"];

export default function DownloadsPage() {
    return (
        <BasicLayout>
            <ContentWrap>
                <ContentTitle>Game and client</ContentTitle>
                <Downloads />
                <ContentTitle>System Requirements</ContentTitle>
                <Table data={downloadRequirements} titles={titles} size={TableSizes.BIG} />
                <ContentTitle>Drivers</ContentTitle>
                <Drivers />
            </ContentWrap>
        </BasicLayout>
    )
}