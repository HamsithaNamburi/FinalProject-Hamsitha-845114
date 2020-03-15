#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["EMart.Buyerservices/EMart.Buyerservices.csproj", "EMart.Buyerservices/"]
RUN dotnet restore "EMart.Buyerservices/EMart.Buyerservices.csproj"
COPY . .
WORKDIR "/src/EMart.Buyerservices"
RUN dotnet build "EMart.Buyerservices.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "EMart.Buyerservices.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "EMart.Buyerservices.dll"]