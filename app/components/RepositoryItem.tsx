interface RepositoryItemProps {
  repository:{
  name:        string;
  description: string;
  html_url:    string;
  } 
}

export function ReposotoryItem(props: RepositoryItemProps){
  return(
    <div>
      <li className="p-6 border-1 shadow-md rounded-xl bg-zinc-50 hover:bg-white transition-all hover:scale-105 w-96">
        <strong className="text-xl">{props.repository.name}</strong>
        <p className="text-clip overflow-hidden mb-5">{props.repository.description}</p>
        <a href={props.repository.html_url} className="text-zinc-500 hover:text-zinc-600 hover:p-2 hover:font-bold hover:ml-2 hover:rounded-full hover:shadow- transition-all">
        Acesse o repositório
        </a>
      </li>
    </div>
  );
}