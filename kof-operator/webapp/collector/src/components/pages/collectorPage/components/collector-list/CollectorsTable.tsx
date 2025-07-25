import { JSX } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
} from "@/components/generated/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/generated/ui/card";
import { Layers } from "lucide-react";
import { Cluster } from "../../models";
import CustomizedTableHead from "./CollectorTableHead";
import CollectorRow from "./CollectorRow";

const CollectorsTable = ({ cluster }: { cluster: Cluster }): JSX.Element => {
  return (
    <Card className="w-full h-full gap-3">
      <CardHeader>
        <CardTitle>
          <div className="flex gap-4 items-center w-full h-full">
            <Layers className="w-5 h-5s"></Layers>
            <div className="flex gap-1 flex-col">
              <h1 className="text-lg font-bold">{cluster.name}</h1>
              <div className="flex gap-3 text-sm font-medium">
                <span>{cluster.pods.length} collectors</span>
                <span>•</span>
                <span className="text-green-600">
                  {cluster.healthyPodCount} healthy
                </span>
                <span>•</span>
                <span className="text-red-600">
                  {cluster.unhealthyPodCount} unhealthy
                </span>
              </div>
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Table className="w-full table-fixed">
          <TableHeader>
            <TableRow className="font-bold">
              <CustomizedTableHead text={"Collector"} width={200} />
              <CustomizedTableHead text={"Status"} width={110} />
              <CustomizedTableHead text={"CPU %"} width={150} />
              <CustomizedTableHead text={"Memory %"} width={150} />
              <CustomizedTableHead text={"Queue %"} width={150} />
              <CustomizedTableHead text={"Metric Points"} width={150} />
              <CustomizedTableHead text={"Log Records"} width={150} />
            </TableRow>
          </TableHeader>
          <TableBody>
            {cluster.pods.map((pod) => (
              <CollectorRow key={pod.name} pod={pod} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CollectorsTable;
