import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import {Helmet} from "react-helmet-async";

const Container = styled.div`
 padding:20px;
`;
const Form = styled.form`
    margin-bottom: 50px;
    width:100%;
`;
const Input = styled.input`
    all:unset;
    font-size:28px;
    width: 100%;
`;

const SearchPresenter = ({ tvResult,
    movieResult,
    error,
    searchTerm,
    loading,
    handleSubmit }) => (
        <>
        <Helmet>
                <title>Search | Kyuflix</title>
        </Helmet> 
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input placeholder="Search Movies or TV Shows ..." defaultValue={searchTerm}/>
            </Form>
            {loading ? <Loader/> : <>
                {movieResult && movieResult.length>0 && <Section title="Movie Results">
                    {movieResult.map(movie=>(<Poster 
                    key={movie.id} 
                    id={movie.id} 
                    imageUrl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    year={movie.release_date && movie.release_date.substring(0,4)}
                    isMovie={true}
                    />))}
                    </Section>}
                    {tvResult && tvResult.length>0 && <Section title="TV Show Results">
                    {tvResult.map(shows=>(<Poster 
                    key={shows.id} 
                    id={shows.id} 
                    imageUrl={shows.poster_path}
                    title={shows.original_name}
                    rating={shows.vote_average}
                    year={shows.first_air_date && shows.first_air_date.substring(0,4)}
                    />))}
                    </Section>}
                    {error && <Message color="#e74c3c" text={error} />} 
                    {movieResult && tvResult && movieResult.length===0 && tvResult.length===0 &&
                    <Message color="#3D5B59" text={`Nothing Found for ${searchTerm}`} />}
                </>
            }
        </Container>
        </>
    );
SearchPresenter.propTypes = {
    tvResult: PropTypes.array,
    movieResult: PropTypes.array,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}
export default SearchPresenter;