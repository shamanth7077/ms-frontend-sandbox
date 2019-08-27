export const tableData = [
    {
        id: 1,
        name: 'Allan',
        family: 'John',
        city: 'Sydney',
        score: 600
    },
    {
        id: 2,
        name: 'Alison',
        family: 'Everard',
        city: 'Melbourne',
        score: 500
    },
    {
        id: 3,
        name: 'Gustav',
        family: 'Klimt',
        city: 'Adelaide',
        score: 200
    },
    {
        id: 4,
        name: 'Peter',
        family: 'Jackson',
        city: 'Canberra',
        score: 300
    },
    {
        id: 5,
        name: 'Lisa',
        family: 'Thomas',
        city: 'Brisbane',
        score: 400
    
    },
    {
        id: 6,
        name: 'Anne',
        family: 'Smith',
        city: 'Perth',
        score: 150
    },
    {
        id: 7,
        name: 'Ben',
        family: 'Affleck',
        city: 'Ryde',
        score: 350
    }];
    


export const columns = [
        {
          property: 'id',
          header: {
            label: 'id'
          },
          currentSorting: false,
          sortingState: 'none',
          sort: false
        },
        {
          property: 'name',
          header: {
            label: 'name'
          },
          currentSorting: true,
          sortingState: 'asc',
          sort: true
        },
        {
          property: 'family',
          header: {
            label: 'family'
          },
          currentSorting: false,
          sortingState: 'none',
          sort: true
        },
        {
          property: 'city',
          header: {
            label: 'city'
          },
          currentSorting: false,
          sortingState: 'none',
          sort: true
        },
        {
            property: 'score',
            header: {
              label: 'score'
            },
            currentSorting: false,
            sortingState: 'none',
            sort: true
          }
      ];
