import {Header} from "./components/Header";
import { RepositoryList } from "./components/RepositoryList"

export default function Home() {
  return (
    <div className="bg-zinc-100 ">
      <Header/>
      <RepositoryList/>
    </div>
  );
}
