"use client";

import { useEffect, useState } from "react";
import { ReposotoryItem } from "./RepositoryItem";

interface Repository {
  name:        string;
  description: string;
  html_url:    string;
}

export function RepositoryList(){
  const[repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() =>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return(
    <div>
      <ul className="flex flex-wrap justify-center gap-6 items-start p-5 mt-10">
        {repositories.map(repository => {
          return <ReposotoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </div>
  );
}