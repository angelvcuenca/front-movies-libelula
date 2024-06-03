"use client";
import {SearchIcon} from "@/components/icons/searchIcon";
import {Input} from "@nextui-org/react";
import {useSearchParams, useRouter} from "next/navigation";
import {useDebouncedCallback} from 'use-debounce'

const SearchMovie = () => {
   // const searchParams:any = useSearchParams();
    const {replace} = useRouter();

    const handleOnChange =useDebouncedCallback( (value: string) => {
        const params = new URLSearchParams();
        if(value){
            params.set("query", value);
        }else {
            params.delete("query");
        }
        replace(`/?${params.toString()}`);
    },200)

    return (

        <Input
            classNames={{
                base: "max-w-full md:w-[400px] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search movie"
            size="sm"
            startContent={<SearchIcon size={18}/>}
            type="search"
            onChange={event => handleOnChange(event.target.value)}
        />

    );
};

export default SearchMovie;