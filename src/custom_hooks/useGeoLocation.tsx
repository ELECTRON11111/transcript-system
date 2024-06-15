import { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState<{
        loaded: boolean,
        coordinates: { lat: any, lng: any },
        error?: { code: string, message: string }
    }>({
        loaded: false,
        coordinates: { lat: "", lng: "" }
    });

    const onSuccess = (location: GeolocationPosition) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    };

    const onError = (error: GeolocationPositionError) => {
        setLocation((prevState) => ({
            ...prevState,
            loaded: true,
            error: {
                code: error.code.toString(),
                message: error.message
            }
        }));
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported"
            } as GeolocationPositionError);
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    }, []);

    return location;
};

export default useGeoLocation;