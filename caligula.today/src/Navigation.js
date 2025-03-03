import {Nav,INavLinkGroup,navStyles} from '@fluentui/react/lib/Nav'

const styles: Partial<INavStyles> = {
        root: {
          width: 208,
          height: 350,
          boxSizing: 'border-box',
          border: '1px solid #eee',
          overflowY: 'auto',
        },
      };

const navLinkGroups: INavLinkGroup[] = [
        {
          links: [
                {
                        name :'Pleroma',
                        url:'https://caligula.today/home',
                        key: 'key1',
                        target:'_blank'
                },
                {
                        name: 'Documents',
                        url: 'http://example.com',
                        key: 'key3',
                        isExpanded: true,
                        target: '_blank',
                },
          ],
        }
      ];

export const Navigation = () =>{
        return (
                <Nav className='NavigationBar' groups={navLinkGroups} styles={styles}/>
        )
}