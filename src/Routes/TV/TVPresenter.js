import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import {Helmet} from "react-helmet-async";
const Container = styled.div`
    padding:20px;
`;
const TVPresenter = ({ topRated, popular, airingToday, loading, error, }) => (
    <>
    <Helmet>
                <title>TV Shows | Kyuflix</title>
    </Helmet> 
    {loading ? <Loader /> : <Container>
        {topRated && topRated.length > 0 && <Section title="Top Rated Shows">
            {topRated.map(shows =><Poster 
                    key={shows.id} 
                    id={shows.id} 
                    imageUrl={shows.poster_path}
                    title={shows.original_name}
                    rating={shows.vote_average}
                    year={shows.first_air_date && shows.first_air_date.substring(0,4)}
                    />)}
        </Section>}
        {popular && popular.length > 0 && <Section title="Top Rated Shows">
            {popular.map(shows =><Poster 
                    key={shows.id} 
                    id={shows.id} 
                    imageUrl={shows.poster_path}
                    title={shows.original_name}
                    rating={shows.vote_average}
                    year={shows.first_air_date && shows.first_air_date.substring(0,4)}
                    />)}
        </Section>}
        {airingToday && airingToday.length > 0 && <Section title="Top Rated Shows">
            {airingToday.map(shows =><Poster 
                    key={shows.id} 
                    id={shows.id} 
                    imageUrl={shows.poster_path}
                    title={shows.original_name}
                    rating={shows.vote_average}
                    year={shows.first_air_date && shows.first_air_date.substring(0,4)}
                    />)}
        </Section>}
        {error && <Message color="#e74c3c" text={error} />} 
    </Container>
    }
    </>
);
TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
}
export default TVPresenter;