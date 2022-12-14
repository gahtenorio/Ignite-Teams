import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import { ListEmpty } from '../../components/ListEmpty/index';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="jogue com sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() =>
          <ListEmpty message="Que tal cadastrar a primeira turma?"
          />
        }
        renderItem={({ item: group }) => (
          <GroupCard
            title={group}
          />
        )}
      />

      <Button
        title='Criar nova turma'
      />
    </Container>
  );
}