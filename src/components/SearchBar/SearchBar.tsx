import toast,{ Toaster } from "react-hot-toast";
import css from './SearchBar.module.css';
import { FormEvent } from "react";
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit })=> {
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    
    const query = (
      form.elements.namedItem("query") as HTMLInputElement
    ).value.trim();

    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    
    onSubmit(query);
    form.reset();
  };
  
  
  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search images and photos"
          autoFocus
          />
        <button className={css.button} type="submit">Search</button>
      </form>
      <Toaster/>
    </header>
  );
}

export default SearchBar;
